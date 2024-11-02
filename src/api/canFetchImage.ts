export async function canFetchImage(url: string): Promise<boolean> {
  try {
    const response: Response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error fetching the image:', error);
    return false;
  }
}
