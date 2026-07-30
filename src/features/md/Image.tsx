type MarkdownImageProps = {
  src: string;
  alt?: string;
  className?: string;
}

function Image({src, alt, className}: MarkdownImageProps) {
  return (
    <img src={src} alt={alt} className={className}/>
  )
}

export default Image;
