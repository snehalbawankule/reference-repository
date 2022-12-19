import {
  Container,
  RectPic,
  TextWrap6,
  TextWrap7,
  TextWrap4,
  TextWrap5,
} from "../registration/registration.styled";
import Rectangle1 from "../assets/images/Rectangle1.png";

const Article = () => {
  return (
    <Container>
      <RectPic background={Rectangle1}>
        <TextWrap4>SkillupAfrica Blog</TextWrap4>
        <TextWrap5>
          The Ancient city of Rome and the history of the great city.
        </TextWrap5>
        <TextWrap6>Olive Junior</TextWrap6>
        <TextWrap7>Lead Writer, SkillupAfrica</TextWrap7>
      </RectPic>
    </Container>
  );
};
export default Article;
