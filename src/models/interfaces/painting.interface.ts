export interface Painting {
  id: number;
  title: string;
  artist_display: string;
  image_id: string;
  is_public_domain: boolean;
  dimensions?: string;
  credit_line?: string;
  date_display?: string;
}
