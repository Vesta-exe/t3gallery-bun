import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/0faffbc8-c66e-412a-ac2a-43287639cb69-sdfzcw.jpg",
  "https://utfs.io/f/7ab682d0-d991-491c-b11b-ad4f62bd8204-oa1mv1.jpg",
  "https://utfs.io/f/da38d4f5-2273-4f0a-9ada-94f4feed19bb-3rhn5o.jpg",
  "https://utfs.io/f/9046a714-def7-43c7-a52a-ce4f07487175-ebd5qk.jpg",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
            </div>
        ))
      }
      </div>
    </main>
  );
}
