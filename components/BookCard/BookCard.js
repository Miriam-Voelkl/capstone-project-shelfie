import Image from "next/image";
import styled from "styled-components";

const StyledBook = styled.article`
  list-style: none;
  display: flex;
  border: 2px solid black;
  border-radius: 8px;
  margin-left: -30px;
  margin-right: 10px;
  padding: 5px;
  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.19);
`;

const StyledInfos = styled.ul`
  list-style: none;
  margin-left: -20px;
  .genre {
    font-style: italic;
    padding-top: 5px;
  }
`;

const StyledImage = styled(Image)`
  margin: auto 2px;
`;

export default function BookCard({
  title,
  author,
  genre,
  cover,
  booksInfo,
  bookId,
}) {
  // const currentBookInfo = booksInfo?.find((bookInfo) => {
  //   return bookInfo.id === bookId;
  // });
  // console.log("currentBookInfo", currentBookInfo);
  return (
    <StyledBook>
      <StyledImage src={cover} alt={title} width={100} height={149} />
      <StyledInfos>
        <li>
          <h4>{title}</h4>
        </li>
        <li>{author}</li>
        <li className="genre">{genre}</li>
      </StyledInfos>
      {/* {currentBookInfo?.isAlreadyRead && <button>✔️</button>} */}
    </StyledBook>
  );
}
