type FetchInit = Parameters<typeof fetch>[1]
type FetchInput = Parameters<typeof fetch>[0]

const API = ''

const request = async <T = any>(
  input: FetchInput,
  init?: FetchInit,
): Promise<T> => {
  const res = await fetch(`${API}${input}`, init)
  return await res.json()
}

export const get = async (url: string) => {
  return await request(url)
}

export const post = async (url: string, init?: FetchInit) => {
  return await request(url, {
    method: 'POST',
    ...init,
  })
}
