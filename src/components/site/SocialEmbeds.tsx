import { useEffect } from "react";

// Paste specific post URLs to embed live. Profile URLs are not embeddable
// by Instagram/Threads — only individual posts.
// Instagram post URL format: https://www.instagram.com/p/XXXXXXXX/
// Threads post URL format:   https://www.threads.com/@charmingbcba/post/XXXXXXXX
export const instagramPosts: string[] = [
  // e.g. "https://www.instagram.com/p/CxXXXXXXXXX/",
];

export const threadsPosts: string[] = [
  // e.g. "https://www.threads.com/@charmingbcba/post/CxXXXXXXXXX",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramEmbeds({ urls }: { urls: string[] }) {
  useEffect(() => {
    window.instgrm?.Embeds?.process();
  }, [urls]);

  if (urls.length === 0) return null;
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {urls.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#fff",
            border: 0,
            margin: 0,
            maxWidth: "100%",
            minWidth: 280,
            width: "100%",
          }}
        />
      ))}
    </div>
  );
}

export function ThreadsEmbeds({ urls }: { urls: string[] }) {
  if (urls.length === 0) return null;
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {urls.map((url) => (
        <blockquote
          key={url}
          className="text-post-media"
          data-text-post-permalink={url}
          data-text-post-version="0"
          style={{
            background: "#fff",
            border: 0,
            margin: 0,
            maxWidth: "100%",
            minWidth: 280,
            width: "100%",
          }}
        />
      ))}
    </div>
  );
}
