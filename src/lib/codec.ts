import { Base64 } from 'js-base64'
import pako from 'pako'

export function encodeText(text: string): string {
  const encoder = new TextEncoder()
  const encodedBytes = encoder.encode(text)
  const compressedBytes = pako.deflate(encodedBytes)

  return Base64.fromUint8Array(compressedBytes, true)
}

export function decodeText(base64UrlString: string): string {
  const compressedBytes = Base64.toUint8Array(base64UrlString)

  const decompressedBytes = pako.inflate(compressedBytes)
  const decoder = new TextDecoder('utf-8')
  return decoder.decode(decompressedBytes)
}
