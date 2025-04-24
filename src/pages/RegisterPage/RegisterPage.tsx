import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, UserPlus } from "lucide-react";

// import animation file
import "../../../public/animations.css";

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  idPhoto: FileList;
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<RegisterFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Registration data:", data);
    // Here you would typically handle registration
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 slide-in">
      <Card className="w-full max-w-md">
        <CardHeader className="text-right">
          <CardTitle>انشاء حساب طالب جديد</CardTitle>
          <CardDescription>عمليه الانشاء تبدا من هنا</CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="text-right">
                      <FormLabel>الاسم الاول</FormLabel>
                      <FormControl>
                        <Input placeholder="ادخل الاسم الاول" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="text-right">
                      <FormLabel>الاسم الاخير</FormLabel>
                      <FormControl>
                        <Input placeholder="ادخل الاسم الاخير" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-right">
                    <FormLabel>البريد الاكتروني</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="ادخل بريد الكتروني مفعل"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="idPhoto"
                render={({ field }) => (
                  <FormItem className="text-right">
                    <FormLabel>صورة البطاقه الشخصيه</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        name={field.name}
                        ref={field.ref}
                        onChange={(e) => {
                          field.onChange(e.target.files);
                        }}
                        onBlur={field.onBlur}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="text-right">
                    <FormLabel>كلمة المرور</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="ادخل كلمه المرور الخاصه بك"
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="text-right">
                    <FormLabel>تأكيد كلمة المرور</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="تأكيد كلمه المرور"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
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
                انشاء حساب
                <UserPlus className="mr-2 h-4 w-4" />
              </Button>
              <div className="text-sm text-muted-foreground text-center">
                لديك حساب بالفعل ؟{" "}
                <Link
                  to="/SignIn"
                  className="text-primary hover:underline"
                >
                  تسجيل الدخول
                </Link>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterPage;
