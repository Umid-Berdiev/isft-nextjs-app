const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function $request<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${url}`, options)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const data = await response.json()
  return data as T
}
