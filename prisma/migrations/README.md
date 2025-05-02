# How to Add New Tables or Migrations

1. **Define your new models or changes**  
   Add your new Prisma models or schema changes in this file as a draft.

2. **Append to `schema.prisma`**  
   Once you're ready, copy your new model definitions and append them to `prisma/schema.prisma`.

3. **Run migrations**  
   Use the Prisma CLI to generate and apply migrations:

   ```bash
   npx prisma migrate dev --name your-migration-name
   ```

---

## Example Model

```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String?
  createdAt DateTime @default(now())
}
```

---

**Note:**  
- Always append your new models to `schema.prisma` before running migrations.
- This file is for drafts and collaboration only; it is not used by Prisma directly.