interface Props {
  children: React.ReactNode;
}

const FormField = (props: Props) => {
  const { children } = props;
  return <div className="flex flex-col">{children}</div>;
};

export { FormField };
