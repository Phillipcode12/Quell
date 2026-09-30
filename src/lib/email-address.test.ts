import { describe, expect, it } from 'vitest'
import { emailLooksWrong, suggestEmail } from './email-address'

describe('the typo that cost the first order', () => {
  it('catches gmal.com', () => {
    // chasebecker27@gmal.com, 2026-09-30. Syntactically perfect, undeliverable,
    // and the customer had no way to know his receipt never arrived.
    expect(suggestEmail('chasebecker27@gmal.com')).toBe('chasebecker27@gmail.com')
  })

  it('catches the other near-misses of the big providers', () => {
    const cases: [string, string][] = [
      ['a@gmial.com', 'a@gmail.com'],
      ['a@gmai.com', 'a@gmail.com'],
      ['a@hotnail.com', 'a@hotmail.com'],
      ['a@outlok.com', 'a@outlook.com'],
      ['a@yaho.com', 'a@yahoo.com'],
      ['a@icloud.co', 'a@icloud.com'],
    ]
    for (const [input, expected] of cases) {
      expect(suggestEmail(input), input).toBe(expected)
    }
  })

  it('preserves the part before the @ exactly', () => {
    // Rewriting someone's local part would be worse than the original typo.
    expect(suggestEmail('first.last+tag99@gmal.com')).toBe(
      'first.last+tag99@gmail.com',
    )
  })
})

describe('what it must never do', () => {
  it('suggests nothing for a correct address', () => {
    // Suggesting "gmail.com" to someone who typed gmail.com would make the
    // whole feature look broken.
    for (const good of [
      'a@gmail.com',
      'a@yahoo.com',
      'a@outlook.com',
      'a@icloud.com',
    ]) {
      expect(suggestEmail(good), good).toBeNull()
    }
  })

  it('suggests nothing for an unrelated domain', () => {
    /**
     * The real risk. Every one of these is somebody's genuine address, and a
     * suggestion here insults a customer who typed their own domain
     * correctly — so the threshold is one edit, not two.
     */
    for (const real of [
      'chris@meibum.com',
      'ryan@blephex.com',
      'a@mail.com',
      'a@email.com',
      'a@gmx.de',
      'a@fastmail.com',
      'a@dss.virginia.gov',
      'a@house-of-communication.com',
    ]) {
      expect(suggestEmail(real), real).toBeNull()
    }
  })

  it('handles junk without throwing', () => {
    for (const junk of ['', '   ', '@', 'a@', '@b.com', 'no-at-sign', 'a@@b.com']) {
      expect(() => suggestEmail(junk)).not.toThrow()
    }
  })
})

describe('structural problems worth naming', () => {
  it('names what is actually wrong', () => {
    expect(emailLooksWrong('nobody')).toMatch(/missing an @/)
    expect(emailLooksWrong('a@b@c.com')).toMatch(/more than one @/)
    expect(emailLooksWrong('@example.com')).toMatch(/before the @/)
    expect(emailLooksWrong('a@')).toMatch(/after the @/)
    expect(emailLooksWrong('a@example')).toMatch(/missing a dot/)
    expect(emailLooksWrong('a@.com')).toMatch(/looks wrong/)
    expect(emailLooksWrong('a b@example.com')).toMatch(/space/)
  })

  it('accepts addresses that are valid but unusual', () => {
    /**
     * Deliberately permissive. The specification allows far stranger addresses
     * than most validators admit, and every extra rule is a chance to turn
     * away a real customer at checkout.
     */
    for (const odd of [
      'first.last@example.com',
      'user+tag@example.co.uk',
      "o'brien@example.com",
      'a_b-c@sub.domain.example.com',
      '123@example.io',
    ]) {
      expect(emailLooksWrong(odd), odd).toBeNull()
    }
  })
})
