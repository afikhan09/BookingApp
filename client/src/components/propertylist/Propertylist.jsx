import React from "react";
import "./Propertylist.css";
import useFetch from "../../hooks/useFetch";

const Propertylist = () => {
  const images = [
    "https://us.123rf.com/450wm/tanaonte/tanaonte1907/tanaonte190700058/128721505-woman-with-sunhat-relaxing-in-swimming-pool-at-spa-resort.jpg?ver=6",
    "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHFyGj0c1K-Mk106ZGT-juvcp-4Z8aMocHw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHFyGj0c1K-Mk106ZGT-juvcp-4Z8aMocHw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHFyGj0c1K-Mk106ZGT-juvcp-4Z8aMocHw&s",
  ];
  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:8800/api/hotels/countByType"
  );

  return (
    <div className="pList">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListimg" />
                <div className="plistTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Propertylist;
