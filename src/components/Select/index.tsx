import { Text, XStack } from "tamagui";
import { Car, CaretDown } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { useState } from "react";

const GRAY_300 = "#5F5B62";
const GRAY_100 = "#1A181B";
const GRAY_400 = "#9F9BA1";

export const Select = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Todos", value: "Todos" },
    { label: "Ativos", value: "active" },
    { label: "Inativos", value: "inactive" },
  ]);

  return (
    <DropDownPicker
      placeholder="Todos"
      placeholderStyle={{
        color: GRAY_100,
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: GRAY_400,
      }}
      labelProps={{
        numberOfLines: 1,
      }}
      containerStyle={{
        width: 111,
        height: 56,
        padding: 4,
        gap: 8,
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 0,
      }}
      dropDownContainerStyle={{
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: GRAY_400,
      }}
      textStyle={{
        fontSize: 14,
        color: GRAY_100,
      }}
    />
  );
};
