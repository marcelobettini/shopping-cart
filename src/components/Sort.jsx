import { BsSortNumericDown } from "react-icons/bs";
import { BsSortNumericDownAlt } from "react-icons/bs";
import { productsContext } from "../context/ProductsContext";
import { useContext } from "react";
function Sort() {
  const { sortedMaxtoMin, handleSort } = useContext(productsContext);
  return (
    <section
      style={{
        display: "flex",
        columnGap: ".5em",
        height: "100%",
      }}
    >
      {sortedMaxtoMin ? (
        <div
          style={{
            backgroundColor: "#1c6400",
            borderRadius: "4px",
            height: "100%",
            padding: ".2em",
            display: "flex",
          }}
        >
          <BsSortNumericDown
            style={{
              color: "#ffffff",
              fontSize: "1.5em",
            }}
            onClick={handleSort}
          />
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#9e0000",
            borderRadius: "4px",
            height: "100%",
            padding: ".2em",
            display: "flex",
          }}
        >
          <BsSortNumericDownAlt
            style={{
              color: "#ffffff",
              fontSize: "1.5em",
            }}
            onClick={handleSort}
          />
        </div>
      )}
    </section>
  );
}

export default Sort;
