import { useRef, useEffect } from "react";

type VideoPlayerProps = {
  videoUrl: string;
  isMuted: boolean;
};

const VideoPlayer = ({ videoUrl, isMuted }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().catch(() => {});
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(videoElement);
    return () => observer.unobserve(videoElement);
  }, []);
  return (
    <div className="w-full h-full bg-black">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;