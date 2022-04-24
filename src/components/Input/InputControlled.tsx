import { useState, forwardRef } from "react";
import cn from "classnames";

interface InputProps {
  name: string;
  size?: string;
  autoComplete?: string;
  className?: string;
  placeHolder?: string;
  onChange: (event: any) => void;
  value: string;
}

const InputControlled = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      name,
      size = "standard",
      autoComplete = "off",
      className,
      placeHolder,
      onChange,
      value,
    } = props;

    const [text, setText] = useState();

    const handleOnChange = (event: any) => {
      if (onChange) {
        onChange(event);
      }
      setText(event.target.value);
    };

    return (
      <div>
        <input
          type="text"
          name={name}
          value={text}
          onChange={handleOnChange}
          placeholder={placeHolder}
          autoComplete={autoComplete}
          className={cn("focus:outline-none", {
            "w-64 h-12 p-2": size === "standard",
          })}
          ref={ref}
        />
      </div>
    );
  }
);

export default InputControlled;
