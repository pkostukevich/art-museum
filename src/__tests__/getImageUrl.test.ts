import { canFetchImage } from '@api/canFetchImage';
import { getImageUrl } from '@utils/getImageUrl';

jest.mock('../api/canFetchImage');

describe('getImageUrl', () => {
  it('returns url when canFetchImage returns true', async () => {
    const imageId: string = 'db45df7f-4d63-07ac-1b4d-8d069d3d9693';
    const url: string = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
    (canFetchImage as jest.Mock).mockResolvedValue(true);
    const result: string = await getImageUrl(imageId);
    expect(result).toBe(url);
  });

  it('returns empty string when canFetchImage returns false', async () => {
    const imageId: string = 'b45df7f-4d63-07ac-1b4d-8d069d3d9693';
    (canFetchImage as jest.Mock).mockResolvedValue(false);
    const result: string = await getImageUrl(imageId);
    expect(result).toBe('');
  });

  it('throws error when canFetchImage throws an error', async () => {
    const imageId: string = '1b45df7f-4d63-07ac-1b4d-8d069d3d9693';
    const error: Error = new Error('Mock error');
    (canFetchImage as jest.Mock).mockRejectedValue(error);
    await expect(getImageUrl(imageId)).rejects.toThrowError(error);
  });
});
