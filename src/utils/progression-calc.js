const getProgression = (start, step, length) => {
  const result = []

  for (let i = 0; i < length; ++i) {
    result.push(start + i * step)
  }

  return result
}

export default getProgression
