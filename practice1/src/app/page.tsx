"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Span } from "next/dist/trace";
import { SubmitHandler, useForm } from "react-hook-form";

type Person = {
  name: string;
  age: number;
};

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Person>();
  const onSubmit: SubmitHandler<Person> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container w-96 border-2 mt-4 rounded"
    >
      <h1 className="text-2xl text-center mt-2">名前入力フォーム</h1>
      <div className="mt-2">
        <Label>名前</Label>
        <Input
          {...register("name", {
            required: "名前を入力してください",
            minLength: { value: 2, message: "2文字以上入力してください" },
          })}
          placeholder="名前を入力してください"
        />
        {errors.name?.message && (
          <span className="text-red-500">{errors.name?.message}</span>
        )}
      </div>
      <div className="mt-2">
        <Label>年齢</Label>
        <Input
          {...register("age", {
            min: { value: 0, message: "0以上入力してください" },
            required: "年齢を入力してください",
          })}
          type="number"
          defaultValue={0}
          // min={0}
          placeholder="年齢を入力してください"
        />
        {errors.age?.message && (
          <span className="text-red-500">{errors.age?.message}</span>
        )}
      </div>
      <div className="mt-2">
        <Button type="submit">送信</Button>
      </div>
      <div>あなたの名前はnameです。</div>
    </form>
  );
}
