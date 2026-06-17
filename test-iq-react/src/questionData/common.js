export const buildQuestions = (generators, total = 100) =>
  Array.from({ length: total }, (_, index) => {
    const round = Math.floor(index / generators.length)
    return generators[index % generators.length](round, index + 1)
  })

export const buildFactQuestions = (facts, variants, total = 100) =>
  Array.from({ length: total }, (_, index) => {
    const fact = facts[index % facts.length]
    const variant = variants[Math.floor(index / facts.length) % variants.length]
    return variant(fact, index + 1)
  })
