import { diff, fileExists } from '../index'

describe('helpers/index', () => {
  it('should return diff [elems present in first array1 but not in second]', () => {
    const d = diff([1, 2, 3, 4, 5], [1, 2, 3])
    expect(d).toEqual([4, 5])
    expect(diff([], [])).toEqual([])
  })

  it('should return if the provided file exists or not', () => {
    expect(fileExists('example/.env.development')).toBe(true)
    expect(fileExists('example/.env.invalid')).toBe(false)
    expect(fileExists('src/helpers/logger.ts')).toBe(true)
  })
})
