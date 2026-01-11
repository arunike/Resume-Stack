import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomString(length = 10) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
}
