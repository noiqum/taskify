"use server";
import z from "zod";

const createBoard = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters",
  }),
});

export async function create(formdata: FormData) {
  const { title } = createBoard.parse({
    title: formdata.get("title")?.toString(),
  });
  prisma?.board.create({
    data: {
      title,
    },
  });
}
