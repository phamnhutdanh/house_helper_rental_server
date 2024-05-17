import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  initServices();
}

async function initServices() {
  await prisma.service.createMany({
    data: [
      {
        name: "Vệ sinh điều hoà, máy lạnh",
        description: "Đặt lịch vệ sinh điều hoà, máy lạnh",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/air-conditioner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvYWlyLWNvbmRpdGlvbmVyLnBuZyIsImlhdCI6MTcxNTg4MTcwNiwiZXhwIjoxNzQ3NDE3NzA2fQ.5RR5g9iuXXjCp5PM0f8SeSECegljjaycIDKrTtPzxYw&t=2024-05-16T17%3A48%3A26.164Z",
      },
      {
        name: "Tổng vệ sinh",
        description: "Đặt lịch tổng vệ sinh",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/cleaning.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvY2xlYW5pbmcucG5nIiwiaWF0IjoxNzE1ODgxODM1LCJleHAiOjE3NDc0MTc4MzV9.jUwQV90ahPaUgUoBd5hsSwF5d7xTMlqObUW4A_n4p_s&t=2024-05-16T17%3A50%3A35.712Z",
      },
      {
        name: "Giúp việc định kỳ",
        description:
          "Đặt lịch giúp việc cho nhân viên định kỳ theo ngày trong tuần",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/broom.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvYnJvb20ucG5nIiwiaWF0IjoxNzE1ODgxODU3LCJleHAiOjE3NDc0MTc4NTd9.ZZlmrRn4HzTS--LoKAp4pfR88xdem_eg3PEIGZei_rs&t=2024-05-16T17%3A50%3A57.728Z",
      },
      {
        name: "Giúp viêc theo giờ",
        description: "Đặt lịch giúp việc cho nhân viên theo giờ nhất định",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/clean.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvY2xlYW4ucG5nIiwiaWF0IjoxNzE1ODgxODY1LCJleHAiOjE3NDc0MTc4NjV9.kYpi5FReUowh3B_pgjBDSoJoA4286N2oYiVOGjGvUIk&t=2024-05-16T17%3A51%3A05.572Z",
      },
    ],
  });
}

main()
  .then(async () => {
    console.log("Seed");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
