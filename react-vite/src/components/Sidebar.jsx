import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearchengin} from '@fortawesome/free-brands-svg-icons';
import React from "react";

const posts = [
  {
    imgSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYxOEU3RUQ0NUFGOTExRUJBQ0Y3OTlBRTE0QzZGNUMzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxOEU3RUQzNUFGOTExRUJBQ0Y3OTlBRTE0QzZGNUMzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRThDODk3NzQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRThDODk3ODQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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",
    title: "Upright, raising a heavy fur muff that covered the whole lower",
    date: "Jan 19 2021",
    link: "/blog",
  },
  {
    imgSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZENTQ5NUJDNUFGOTExRUI4QTJGOTU4RjlFNDdBOUI2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZENTQ5NUJCNUFGOTExRUI4QTJGOTU4RjlFNDdBOUI2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRThDODk3NzQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRThDODk3ODQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAEMAPAMBEQACEQEDEQH/xACNAAABBQEBAQAAAAAAAAAAAAAGAQMFBwgAAgQBAAMBAQEAAAAAAAAAAAAAAAABAgMEBRAAAQMCBAIHBAcIAwAAAAAAAQIDBBEFACESEzEUQVEiMhUGB0JiIxZhcYGRoiQIocGCkjNjJTU0hBcRAQACAgIBBAMAAAAAAAAAAAABESECEgMEMUFRInGBE//aAAwDAQACEQMRAD8AuWQ8NWkZnifqw0PhkzdhKiDWhzGAKj9Q/wBQivLcpdsssZqfc0Cj7jpVsx1HgghBBWvrFQBhWdAuH+qH1DaC1KRDQ8pGlJaQpKS6FVS4tJKtSUjLQCATxOCJOh76Q/qXv9180xPL3nFppTV0WGYVxYQltTUhRohLiE5baz2a8UmnRh2KhpM1BIPEZHFIdhG7DALlBCSVUzIoDhAH+aJslmJJW1m8Gllke9p7Jp9eFIhjl5tTj9VrUt54lTyld4OEncKvp1VxLRIp8v3hFsVdWocjw9JAVKDatBQTTUFkaaA4XOLV/Parof8AoK9abT6oWR+7x0zo9wK4tslcExpbmSHFIORp3c+FdQxV5TOuG10ElIrx6cWye8AdgMDz3EpSdX3HCIFX11gtvIBHxAUEqrnUcMujAGa/Llqg3/1FEWc6lm2cwpcx0JUQGGTQpOgKPbIoTjHaajDp69bnLZcT5ZkeXqbkR2xbZacKFJ5dLYGkoyyTQZUxlToubZeTYodh9VrbaEyQbQm7xJUCU4lTaHIynQWlgrCe7/Tr041ib9WO2tXXu2salaiciSSQejG7kKMALgCsrnIUUqUg6lqNCnifsxJhG7oQGluLoXBU0GX3YArP0q8pMx/NF5auqSlicVJhyW3NLhRuVUKJOtIOoA1445+2ap2+Pm19WS129p64WhKCiM4hg7fa7QCSgqCuvrPHEXlrVQF/UH0WtXmNuAxaFuQ7jB+GzIUpToUlRGlDhUdVArtVHCmL0zthn2zEa5/S74yHG4zLTjhecbbQhbxyK1JSAV094iuOpwSdwB2AKvusppP9NBW4rI9FMIBe6h7MqTp6tOdPtwqFgFSn7Z5wjTI6A4p47UhkZFTZ7WXvAioOMO+MW6vG2+1LWsENy4Tzck+YJzCElP8AjG1BsI0+zpp7XTqrjDXeKehPZEa1xj8rFs6QtTq1JAcBFB00I446eiIqXm+RM3CZAIyIoRxGN3OUYAXAFW3mbAYCEOOJa3VBtBUCSpau6lISFKUTTIJBOHSQXLu58TOqXG5JohPIvGKJClA5laFzE/VpUEjrwUqkr5fsdourWm1IZdVGc1yUNviStpbqi4UKeFUr/gNBwxw9um95eh1baV9RzGioglB00cd0o0U7ROIiKVOT8+4RLc0ZU15uE2lCl7j7iW6oT3iATVQ66Y011m8I2mKyEbL6hvWsqYiTmrlaELVyzMmfb5MhDajqFHTMbkKoTQIWmqU0GeOvWJrLj343hZtivsO8wRKjhTaxk9HcyWgnh9Ckq9lSag4aElgJnK4SBc7gIkdhUqQwgOrLr5iRkMSEqbO/JqNDS1IUX9B3NlCwnvHAcFgTnV21uTDlyXLVwamiPMtcYp6ClnetMCMhQzabQ44vRpKjqJw4N7VIRJCUuSy+hBqhK5shaQQa1o3eQK/VhhOs+a/MQSAHUPACgUGn3VJH0EXFxVcTw1+Fc9vlFuPOonu3Jbjibg8AHZYl3WI6UjgNTslxoJ90UGKqkzNnJMu4CMqVKlvpZSO1KmSX2mAFd1QuTaLlDTnl+ZbSnrIwSE/6bzzC8whkULErdQtCG0RgNK0tOF6OyAwiVFeKEvlgBp5pxt9I44QlblMJLMUp2H4esXCO3JtDLznJsy1GE2twlO82zMXqiPvOJQWtuQptxpKl6NQVhxJwcsRv1y1yp0GXJuqJLiHbvyNwnOqQEhRDMhtp9CfiLKdLegJAyw5AhTbvMJBKoN3V1Awbqs/e49X8GA3k2y5kHct80V4h633IH8Vskj8WCAVq23AKOzBl1/twZ/7rMjAT0mJLjLektQJjEqMgvBXLSIj61d3TDlmBCcQ8qukNv7rLndWBWuAy2lTjF5hc21KkOcywIkuZrbdeU0NEeTyTRRNU+qI6YklsMpZO2lRWEpwBfFfiVrlWtajr6+GJSzXaNnnLvq3/ABSh5H5f3fEdvSf9np/x23Wu3zfb0/RTD1P2C1i2tEjxH5X5reX/ALXc3+PteHfltPV9uGaURWuX/mG371NX7fiYAlofy5Qb/wAo6unkPHNP8Ox2fuwsmdf+WMtHyx/2/H/2a8GQdleA+BSeQ5HnqJ2+U8Y5bvCv/P8AydKcdfs1pnTDiykz5d3OeuHiXIclsjlfBNHLblRp8Z8N/N8vXu8x2K8csINFfF2/a16P7fHT/L+77MJL/9k=",
    title: "Arm towards the viewer, Pegor then turned to look out the window",
    date: "Jan 19 2021",
    link: "/blog",
  },
  {
    imgSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgwQUFDQUFFNUFGOTExRUI4ODQwQUREM0YxNzQwOTVEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgwQUFDQUFENUFGOTExRUI4ODQwQUREM0YxNzQwOTVEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRThDODk3NzQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRThDODk3ODQzNDcxMUVCOUY4Q0JBRUExQ0M3NDI2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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",
    title: "Housed in a nice, gilded frame, showed a lady fitted out with",
    date: "Jan 19 2021",
    link: "/blog",
  },
];

const categories = [
  { name: "Funding", count: 2, link: "/blog" },
  { name: "Charity organization", count: 7, link: "/blog" },
  { name: "Helpless", count: 51, link: "/blog" },
  { name: "Charity", count: 5, link: "/blog" },
  { name: "Children", count: 10, link: "/blog" },
];

const Sidebar = () => {
  return (
    <div className="col-span-12 lg:col-span-4 lg:px-6 m-auto overflow-hidden">
      <div className="pb-4">
        <h5 className="font-bold mb-3 text-2xl">Search</h5>
        <div className="flex items-center border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search Post..."
            className="w-full p-2 outline-none"
          />
          <button className="p-3 bg-gray-200">
          <FontAwesomeIcon icon={faSearchengin} />
          </button>
        </div>
      </div>

      <div className="py-4">
        <h5 className="font-bold mb-3 text-2xl">Categories</h5>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href={category.link}
                className="flex hover:underline"
              >
                <span>{category.name}</span>
                <div className="p-1"></div>
                <span>({category.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-2 pb-4">
        <h5 className="font-bold mb-3 text-2xl">Recent Posts</h5>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="pt-3 flex items-start space-x-4">
              <img
                src={post.imgSrc}
                alt="Post"
                className="w-16 h-16 object-cover"
              />
              <div>
                <h6 className="font-bold text-sm">
                  <a href={post.link} className="hover:underline">
                    {post.title}
                  </a>
                </h6>
                <div className="sm:text-base lg:text-xl mt-1 text-gray-500">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-4">
        <h5 className="font-bold mb-3 text-2xl">About</h5>
        <p className="text-gray-600">
          Towards the viewer, Gregor then turned to look out the window at the
          dull weather towards the viewer Gregor then turned to look.
        </p>
      </div>

      <div className="py-4">
        <h5 className="font-bold mb-3 text-2xl">Tags</h5>
        <p className="text-gray-600">
          Charity, Organization, Donation, Manufacturing, Children, Funds
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
