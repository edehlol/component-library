interface Props {
  children: React.ReactNode;
}

const FormLabel = (props: Props) => {
  const { children } = props;
  return <label className="text-sm mb-2">{children}</label>;
};

export { FormLabel };
