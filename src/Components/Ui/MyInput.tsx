export type MyInputProps = {
  placeholder?: string;
  value: string;
  dispatch?: (value: string) => void;
  icon?: React.ReactNode;
};

export default function MyInput(data: MyInputProps) {
  const handleInputChange = (value: string) => {
    if (data.dispatch) {
      data.dispatch(value);
    }
  };
  return (
    <div className="Input">
      {data.icon && (
        <span className="InputIcon" aria-hidden="true">
          {data.icon}
        </span>
      )}

      <input
        type="text"
        className="InputField"
        placeholder={data.placeholder}
        value={data.value}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
}

// uses : {
//     useState :
//     const [name, setName] = useState("");s
//     <MyInput value={name} dispatch={setName} />

//     useReucer :
//     type Action = { type: "SET_NAME"; payload: string };
//     const reducer = (state: string, action: Action) => {
//     if (action.type === "SET_NAME") return action.payload;
//     return state;
//     };
//     ======
//     const [name, dispatch] = useReducer(reducer, "");
//     <MyInput
//     value={name}
//     dispatch={(value) => dispatch({ type: "SET_NAME", payload: value })}
//     />

//     Redux:
//     const value = useSelector(selectName);
//     const dispatch = useAppDispatch();
//     <MyInput
//     value={value}
//     dispatch={(value) => dispatch(setName(value))}
//     />
// }
