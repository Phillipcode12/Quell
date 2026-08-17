import { randomInt } from 'node:crypto'

/**
 * Short public order reference, e.g. "Q-7F3K9M2A".
 *
 * Exists because the gateway's invoiceNumber field is capped at 20 characters
 * and a cuid is 25, so the primary key cannot travel with the payment. This is
 * also what customers read out on the phone, so the alphabet drops the
 * characters people confuse when reading aloud: I, L, O, U, 0 and 1.
 */
const ALPHABET = '23456789ABCDEFGHJKMNPQRSTVWXYZ'
const LENGTH = 8

export function generateOrderNumber(): string {
  let suffix = ''
  for (let i = 0; i < LENGTH; i += 1) {
    suffix += ALPHABET[randomInt(ALPHABET.length)]
  }
  return `Q-${suffix}`
}

/**
 * 30^8 is ~656 billion, so collisions are vanishingly unlikely — but the
 * column is unique and a collision would surface as a failed checkout, so
 * retry rather than trust the odds.
 */
export async function generateUniqueOrderNumber(
  exists: (candidate: string) => Promise<boolean>,
  attempts = 5,
): Promise<string> {
  for (let i = 0; i < attempts; i += 1) {
    const candidate = generateOrderNumber()
    if (!(await exists(candidate))) return candidate
  }
  throw new Error('Could not allocate an unused order number.')
}
