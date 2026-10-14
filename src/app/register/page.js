"use client";

import { createArticle } from "@/lib/api/articles";
import * as styles from "./page.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { title: "", content: "" },
  });

  const onSubmit = async (data) => {
    try {
      const article = await createArticle(data);
      router.push(`/articles/${article.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const required = { validate: (v) => v.trim() !== "" };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <h1 className={styles.formTitle}>게시글 쓰기</h1>
        <button
          className={styles.registerButton}
          type="submit"
          disabled={!isValid}
        >
          등록
        </button>
      </div>

      <div className={styles.main}>
        <div className={styles.inputBox}>
          <label className={styles.label}>*제목</label>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="제목을 입력해주세요"
            {...register("title", required)}
          />
        </div>

        <div className={styles.inputBox}>
          <label className={styles.label}>*내용</label>
          <textarea
            className={styles.contentTextarea}
            type="text"
            placeholder="내용을 입력해주세요"
            {...register("content", required)}
          />
        </div>
      </div>
    </form>
  );
}
