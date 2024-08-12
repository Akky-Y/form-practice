"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");

  return (
    <form className="container w-96 border-2 mt-4 rounded">
      <h1 className="text-2xl text-center mt-2">名前入力フォーム</h1>
      <div className="mt-2">
        <Label>名前</Label>
        <Input
          placeholder="名前を入力してください"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </div>
      <div className="mt-2">
        <Button type="submit">送信</Button>
      </div>
      <div>あなたの名前は{name}です。</div>
    </form>
  );
}
