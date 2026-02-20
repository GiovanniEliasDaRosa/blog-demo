import { useEffect, useState } from "react";

export default function BetterImage({
  src,
  preview,
  alt = "",
  folder = `${import.meta.env.BASE_URL}assets/`,
  loading = "lazy",
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  const preview_url =
    preview == null ? src.replace(/(\w.+)(\.[^.\\/\\]+)/, "$1-preview$2") : preview;
  console.log(folder + preview_url);

  useEffect(() => {
    const img = new Image();
    img.src = folder + src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [folder, src]);

  return <img src={folder + (loaded ? src : preview_url)} alt={alt} loading={loading} {...props} />;
}
