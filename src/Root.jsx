import React, { useState } from "react";
import {
  Number,
  Button,
  Check,
  Container,
  Icon,
  Input,
  Item,
  List,
  Span,
  Title,
  Wrapper,
  Total,
} from "./RootStyle";

export const Root = () => {
  const [state, setState] = useState([
    { id: 1, title: "item 1", num: 0, selected: false },
    { id: 2, title: "item 2", num: 0, selected: false },
    { id: 3, title: "item 3", num: 0, selected: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const Sum = state.reduce((a, item) => a + item.num, 0);
  const handleAddItem = () => {
    const newUser = {
      id: Date.now(),
      title: inputValue,
      num: 0,
      completed: false,
    };

    if (inputValue.trim()) {
      setState([...state, newUser]);
      setInputValue("");
    }
  };

  const handleIncrement = (id) => {
    const s = state.map((value) => {
      if (value.id === id) {
        let newNum = { ...value, num: ++value.num }; /* Number 1 */
        return newNum;

        // value.num++       /* Number 2 */
        // return value
      } else {
        return value;
      }
    });
    setState(s);
  };

  const handleDecrement = (index) => {
    if (state[index].num > 0) {
      const Decrease = [...state];
      Decrease[index].num--;
      setState(Decrease);
    }
  };

  const handleSelect = (id, index, select) => {
    let selectOne = [...state];
    selectOne[index].selected = !select;
    setState(selectOne);
  };

  return (
    <Container className="nocopy">
      <Wrapper>
        <Input.Wrapper>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add an item"
          />
          <Button onClick={handleAddItem} />
        </Input.Wrapper>
        <List>
          {state.map((value, index) => {
            return (
              <Item key={value.id}>
                <Title.Wrapper>
                  <Check
                    onChange={() =>
                      handleSelect(value.id, index, value.selected)
                    }
                    checked={value.selected}
                    type="checkbox"
                  />
                  <>
                    {value.selected ? (
                      <Title.LineThrough>{value.title}</Title.LineThrough>
                    ) : (
                      <Title>{value.title}</Title>
                    )}
                  </>
                </Title.Wrapper>
                <Span>
                  <Icon.Left onClick={() => handleDecrement(index)} />
                  <Number>{value.num}</Number>
                  <Icon.Right onClick={() => handleIncrement(value.id)} />
                </Span>
              </Item>
            );
          })}
        </List>
        <Total>
          <Title>Total: {Sum}</Title>
        </Total>
      </Wrapper>
    </Container>
  );
};
