import { FormField } from './FormField';
import { FormInput } from './FormInput';
import { FormLabel } from './FormLabel';

// const FormSubsection = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="bg-gray-100 p-4 md:p-8 flex justify-center items-center">
//       <p className="text-xs text-gray-500">
//         {children}
//         {/* Don&apos;t have an account? <a className="text-blue-500">Register</a> */}
//       </p>
//     </div>
//   );
// };

const Form = ({ children }: { children: React.ReactNode }) => {
  return (
    <form className="border rounded-lg max-w-lg mx-auto ">
      <div className="flex flex-col gap-4 p-4 md:p-8">{children}</div>
    </form>
  );
};

export default Object.assign(Form, {
  Label: FormLabel,
  Input: FormInput,
  Field: FormField,
});
