import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
// import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
// import { Label } from "../../components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, LogIn } from "lucide-react";

// import animation file
import "../../../public/animations.css";

type UserType = "student" | "owner";

interface LoginFormData {
  username: string;
  password: string;
  userType: UserType;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
      userType: "student"
    }
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    // Here you would typically handle authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-4 slide-in">
      <Card className="w-full max-w-md">
        <CardHeader className="text-right">
          <CardTitle> تسجيل الدخول</CardTitle>
          <CardDescription>سجل دخولك من هنا</CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              {/* <FormField
                control={form.control}
                name="userType"
                render={({ field }) => (
                  <FormItem className="space-y-3 flex flex-col items-end mb-6">
                    <FormLabel>نوع الحساب</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="owner">صاحب عقار</Label>
                          <RadioGroupItem value="owner" id="owner" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="student">طالب</Label>
                          <RadioGroupItem value="student" id="student" />
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex flex-col items-end">اسم المستخدم</FormLabel>
                    <FormControl>
                      <Input placeholder="اسم المستخدم" {...field} />
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
                    <FormLabel className="flex flex-col items-end">كلمة المرور</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="كلمه المرور"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                تسجيل الدخول
                <LogIn className="mr-2 h-4 w-4" />
              </Button>
              <div className="text-sm text-muted-foreground text-center">
                ليس لديك حساب ؟{" "}
                <Link
                  to="/register"
                  className="text-primary hover:underline"
                >
                  سجل الآن
                </Link>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;