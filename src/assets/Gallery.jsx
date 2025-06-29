import React from 'react'
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1019/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1021/600/400",
  "https://picsum.photos/id/1022/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1019/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1021/600/400",
  "https://picsum.photos/id/1022/600/400",
  "https://picsum.photos/id/1023/600/400"
];

export default function Gallery() {
  const [showAll, setShowAll] = React.useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


            {images.slice(0, showAll ? images.length : 8).map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="transition-transform"
              >
                <Card className="overflow-hidden rounded-2xl shadow-md bg-white">
                  <CardContent className="p-0">
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <div className="col-span-full text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
              >
                {showAll ? "Show Less" : "Show All"}
              </button>
            </div>
        );

      </div>
    </div>
  )
}
