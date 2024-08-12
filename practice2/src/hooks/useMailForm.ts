import { formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

const useMailForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      content: "",
    },
  });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onSubmit = useCallback((values: any) => {
    console.log(values);
  }, []);

  return { form, onSubmit };
};

export default useMailForm;
