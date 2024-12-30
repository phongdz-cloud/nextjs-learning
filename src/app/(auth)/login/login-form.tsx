"use client";

import authApiRequest from "@/app/apiRequests/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { handleErrorApi } from "@/lib/utils";
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast().toast;
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: LoginBodyType) {
    if (loading) return;
    setLoading(true);
    try {
      const result = await authApiRequest.login(values);
      await authApiRequest.auth({ sessionToken: result.payload.data.token });
      toast({
        description: result.payload.message,
      });
      router.push("/me");
    } catch (e: any) {
      handleErrorApi({
        error: e,
        setError: form.setError,
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 max-w-[600px] w-full"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input placeholder="Mật khẩu" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="!mt-8 w-full">
          Đăng nhập
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
