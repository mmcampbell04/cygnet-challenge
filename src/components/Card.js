import valve from "../images/valve.png";
import iconR from "../images/Group.svg";
import iconG from "../images/Vector.png";
import {
  StyledCard,
  CardHeader,
  Photo,
  PartCode,
  PartName,
  IconWrapper,
  Price,
  AddToCartWrapper,
} from "./styles/Card.styled";
import { Button } from "./styles/Button.styled";

const Card = ({ item }) => {
  return (
    <StyledCard>
      <CardHeader href="/">
        <Photo src={valve} alt="part" />
        <PartCode>{item.code}</PartCode>
        <PartName>
          {item.name} | {item.code}
        </PartName>
        <IconWrapper>
          {item.genuine && <img src={iconG} alt="genuine part icon" />}
          {item.recommended && <img src={iconR} alt="recommended part icon" />}
        </IconWrapper>
        <Price>{item.price}</Price>
      </CardHeader>

      <AddToCartWrapper>
        <input
          type="number"
          name="number-items"
          id="number"
          placeholder="123"
        />
        <Button>Add to Cart</Button>
      </AddToCartWrapper>
    </StyledCard>
  );
};

export default Card;
