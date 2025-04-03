import { z } from "zod";

export const SignUpSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string(),
    email: z.string().email(),
})

export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export const CreateRoomSchema = z.object({
    name: z.string().min(3).max(20),
})