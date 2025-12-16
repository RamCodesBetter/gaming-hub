#!/bin/bash

BAR_WIDTH=20

bar() {
  local value=$1
  local max=100
  local filled=$((value * BAR_WIDTH / max))
  local empty=$((BAR_WIDTH - filled))

  printf "["
  for ((i=0;i<filled;i++)); do printf "█"; done
  for ((i=0;i<empty;i++)); do printf "░"; done
  printf "] %3d%%" "$value"
}

color() {
  if [ "$1" -ge 85 ]; then
    printf "\033[31m"   # red
  elif [ "$1" -ge 65 ]; then
    printf "\033[33m"   # yellow
  else
    printf "\033[32m"   # green
  fi
}

reset="\033[0m"

while true; do
  clear
  echo "==================== MAC PERFORMANCE HUD ===================="
  echo

  # CPU PER CORE
  echo "CPU USAGE (per core):"
  ps -A -o %cpu | awk '{s+=$1} END {print int(s)}' > /tmp/cpu_total

  i=0
  ps -A -o %cpu -o cpuid | awk 'NR>1 {cpu[$2]+=$1} END {for (c in cpu) print c, int(cpu[c])}' | sort -n | while read core usage; do
    c=$(color "$usage")
    printf "Core %s: %b" "$core" "$c"
    bar "$usage"
    printf "%b\n" "$reset"
    ((i++))
  done

  echo

  # MEMORY
  echo "MEMORY:"
  vm_stat | awk '
    /Pages free/ {free=$3}
    /Pages active/ {active=$3}
    /Pages wired/ {wired=$3}
    END {
      used=(active+wired)*4096/1024/1024/1024
      free=free*4096/1024/1024/1024
      printf "Used: %.2f GB | Free: %.2f GB\n", used, free
    }'
  echo

  # DISK
  echo "DISK:"
  df -h / | tail -1
  echo

  # BATTERY
  echo "BATTERY:"
  pmset -g batt | head -1
  echo

  # TEMPS + GPU + FAN
  echo "THERMALS / GPU / FAN:"
  powermetrics --samplers smc --show-initial-usage 2>/dev/null | awk '
    /CPU die temperature/ {
      temp=int($4)
      color=(temp>=90?"\033[31m":temp>=75?"\033[33m":"\033[32m")
      printf "CPU Temp: %s%d°C\033[0m\n", color, temp
    }
    /GPU die temperature/ {
      temp=int($4)
      color=(temp>=85?"\033[31m":temp>=70?"\033[33m":"\033[32m")
      printf "GPU Temp: %s%d°C\033[0m\n", color, temp
    }
    /GPU Power/ {print}
    /Fan/ {print}
    /Thermal pressure/ {
      if ($3 != "Nominal") {
        printf "\033[31m⚠ THERMAL THROTTLING DETECTED (%s)\033[0m\n", $3
      }
    }'
  echo

  echo "============================================================="
  sleep 1
done

