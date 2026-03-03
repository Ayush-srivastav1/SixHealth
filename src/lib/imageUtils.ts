/**
 * Image utility functions for consistent image handling
 */

export const imageUtils = {
  /**
   * Get fallback handler for images
   */
  getFallbackHandler: (fallbackUrl: string = "/placeholder.svg") => {
    return (e: any) => {
      if (e.currentTarget.src !== fallbackUrl) {
        e.currentTarget.src = fallbackUrl;
      }
    };
  },

  /**
   * Ensure image path is absolute (starts with /)
   */
  ensureAbsolutePath: (path?: string, fallback = "/placeholder.svg"): string => {
    if (!path) return fallback;
    if (path.startsWith("/")) return path;
    if (path.startsWith("http")) return path;
    // Incorrect relative path - convert to absolute
    return `/images/${path.replace(/^\.\/|^\.\.\//g, "")}`;
  },

  /**
   * Add lazy loading attribute to image element
   */
  addLazyLoading: (img: HTMLImageElement) => {
    img.loading = "lazy";
  },

  /**
   * Validate and fix image properties
   */
  validateImageProps: (
    src?: string | null,
    alt?: string,
    fallback = "/placeholder.svg"
  ) => ({
    src: src && (src.startsWith("/") || src.startsWith("http"))
      ? src
      : fallback,
    alt: alt || "Image",
    loading: "lazy" as const,
  }),
};
