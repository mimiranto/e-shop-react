import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Varticle = () => {
  const [viewarticle, setTab] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/article/get/${id}`
        );
        console.log(data);
        setTab(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchuser();
  }, [id]);

  return (
    <div>
      <img src={viewarticle.imageUrl} alt="Article" />{" "}
      <p>
        Nom: {viewarticle.name} <br />
        Mail: {viewarticle.email} <br />
        Address: {viewarticle.street}
      </p>
    </div>
  );
};

export default Varticle;
