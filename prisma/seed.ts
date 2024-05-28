import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
 // initServices();
 initServicesDetail();
}

async function initServicesDetail() {
  const cleaningId = 'clwm6n1180000137hzkbkdsbn';
  const gardenerId = 'clwm6n1190001137hf73azkpc';
  const painterId = 'clwm6n1190002137hsjjhuyp8';
  const plumberId = 'clwm6n1190003137hal0mhdqt';
  const cookingId = 'clwm6n1190004137h4kssn3z2';
  const pettingId = 'clwm6n1190005137hofoku7jp';

  await prisma.serviceDetails.createMany({
    data: [
      // Cleaning
      {
          name : 'Clean living room',
          serviceDetailCode: 'clean-living-room',
          description :'Clean living room description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/living-room.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9saXZpbmctcm9vbS5wbmciLCJpYXQiOjE3MTY2NTM0NzcsImV4cCI6MTc0ODE4OTQ3N30.WNnV5kPJphRVT-cO-ivgCj3BmQwsDMA7FKe-1qFC6pg&t=2024-05-25T16%3A11%3A17.720Z',
          serviceId   : cleaningId,
          fee: 45000,
      },
          {
          name : 'Clean bedroom',
          serviceDetailCode: 'clean-bedroom',
          description :'Clean bedroom description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/bedroom.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9iZWRyb29tLnBuZyIsImlhdCI6MTcxNjY1MzQ4OSwiZXhwIjoxNzQ4MTg5NDg5fQ.DphK5MJqtioAalOokCCG-P-m4evjkspXOdKJYheGKSs&t=2024-05-25T16%3A11%3A30.184Z',
          serviceId   : cleaningId,
          fee: 50000,
      },
          {
          name : 'Clean bathroom',
          serviceDetailCode: 'clean-bathroom',
          description :'Clean bathroom description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/bath.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9iYXRoLnBuZyIsImlhdCI6MTcxNjY1MzUwMywiZXhwIjoxNzQ4MTg5NTAzfQ.-cQkm3jsUZ77LE4ya09uODKamoyrIM8NMd6xoeceqtI&t=2024-05-25T16%3A11%3A43.726Z',
          serviceId   : cleaningId,
          fee: 68000,
      },
          {
          name : 'Clean kitchen',
          serviceDetailCode: 'clean-kitchen',
          description :'Clean kitchen description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/kitchen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9raXRjaGVuLnBuZyIsImlhdCI6MTcxNjY1MzUxNCwiZXhwIjoxNzQ4MTg5NTE0fQ.MY0bzoQNOgs7AStIWonOwv2nZu6ndBIxVn-HJ2HYXfY&t=2024-05-25T16%3A11%3A54.692Z',
          serviceId   : cleaningId,
          fee: 35000,
      },
          {
          name : 'Washing cloth',
          serviceDetailCode: 'clean-washing-cloth',
          description :'Washing cloth description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/laundry.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9sYXVuZHJ5LnBuZyIsImlhdCI6MTcxNjY1MzU4MCwiZXhwIjoxNzQ4MTg5NTgwfQ.K-HixAwwrbvhpBvTOVviKppUO1w6bcb7ar8jE4ioZ0o&t=2024-05-25T16%3A13%3A00.546Z',
          serviceId   : cleaningId,
          fee: 25000,
      },
          {
          name : 'Washing dish',
          serviceDetailCode: 'clean-washing-dish',
          description :'Washing dish description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/kitchen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9raXRjaGVuLnBuZyIsImlhdCI6MTcxNjY1MzUxNCwiZXhwIjoxNzQ4MTg5NTE0fQ.MY0bzoQNOgs7AStIWonOwv2nZu6ndBIxVn-HJ2HYXfY&t=2024-05-25T16%3A11%3A54.692Z',
          serviceId   : cleaningId,
          fee: 20000,
      },
      // Gardener
           {
          name : 'Cutting grass',
          serviceDetailCode: 'cutting-grass',
          description :'Cutting grass description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/lawnmower.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9sYXdubW93ZXIucG5nIiwiaWF0IjoxNzE2NjUzNTkwLCJleHAiOjE3NDgxODk1OTB9.nT1m_yibOUONSZQeJCZddWHXSPhYMp9O_q2zBNanQCM&t=2024-05-25T16%3A13%3A10.117Z',
          serviceId   : gardenerId,
          fee: 46000,
      },
           {
          name : 'Watering flower',
          serviceDetailCode: 'watering-flower',
          description :'Watering flower description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/watering-can.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy93YXRlcmluZy1jYW4ucG5nIiwiaWF0IjoxNzE2NjUzNjU3LCJleHAiOjE3NDgxODk2NTd9.x891gDFOaWnZR9mE9cFlQp6EJ50I58dWvXWbGw70q4g&t=2024-05-25T16%3A14%3A17.709Z',
          serviceId   : gardenerId,
          fee: 27000,
      },
      // Painter
      {
          name : 'Paint living room',
          serviceDetailCode: 'paint-living-room',
          description :'Paint living room description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/living-room.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9saXZpbmctcm9vbS5wbmciLCJpYXQiOjE3MTY2NTM2NzAsImV4cCI6MTc0ODE4OTY3MH0.zyyH-RPBDkmVjI9uELFPUFx31ooYDAiQl1AR-p7t3Rs&t=2024-05-25T16%3A14%3A30.839Z',
          serviceId   : painterId,
          fee: 49000,
      },
          {
          name : 'Paint bedroom',
          serviceDetailCode: 'paint-bedroom',
          description :'Paint bedroom description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/bedroom.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9iZWRyb29tLnBuZyIsImlhdCI6MTcxNjY1MzY4MCwiZXhwIjoxNzQ4MTg5NjgwfQ.458z6MZ_UUxSRgCqTxdsLV3AAF8h9_7WQlsfJTTd3EM&t=2024-05-25T16%3A14%3A40.069Z',
          serviceId   : painterId,
          fee: 70000,
      },
          {
          name : 'Paint bathroom',
          serviceDetailCode: 'paint-bathroom',
          description :'Paint bathroom description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/bath.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9iYXRoLnBuZyIsImlhdCI6MTcxNjY1MzY5MywiZXhwIjoxNzQ4MTg5NjkzfQ.6Rkk_mZBa4W2gkwJYQd2-xFYNKLD-egBG6ZcMkB1bW8&t=2024-05-25T16%3A14%3A54.080Z',
          serviceId   : painterId,
          fee: 62000,
      },
          {
          name : 'Paint kitchen',
          serviceDetailCode: 'paint-kitchen',
          description :'Paint kitchen description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/kitchen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9raXRjaGVuLnBuZyIsImlhdCI6MTcxNjY1MzcwMiwiZXhwIjoxNzQ4MTg5NzAyfQ.UzUNl3KWkecW7VTK7OwaKiQJFeGVuY5wBM7fK-GolUk&t=2024-05-25T16%3A15%3A02.343Z',
          serviceId   : painterId,
          fee: 43000,
      },
      // Plumber 
  {
          name : 'Fix pipe kitchen',
          serviceDetailCode: 'pipe-kitchen',
          description :'Fix pipe kitchen description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/kitchen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9raXRjaGVuLnBuZyIsImlhdCI6MTcxNjY1MzcwMiwiZXhwIjoxNzQ4MTg5NzAyfQ.UzUNl3KWkecW7VTK7OwaKiQJFeGVuY5wBM7fK-GolUk&t=2024-05-25T16%3A15%3A02.343Z',
          serviceId   : plumberId,
          fee: 33000,
      },
        {
          name : 'Paint pipe bathroom',
          serviceDetailCode: 'pipe-bathroom',
          description :'Fix pipe bathroom description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/bath.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9iYXRoLnBuZyIsImlhdCI6MTcxNjY1MzcxNiwiZXhwIjoxNzQ4MTg5NzE2fQ.YVj0qeU0qARPaLHRDIZfP0dUKWALtxtz-G3OFjr22xM&t=2024-05-25T16%3A15%3A16.950Z',
          serviceId   : plumberId,
          fee: 53000,
      },
      // cooking
       {
          name : 'Cooking cake',
          serviceDetailCode: 'cooking-cake',
          description :'Cooking cake description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/baker.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9iYWtlci5wbmciLCJpYXQiOjE3MTY2NTM3MjUsImV4cCI6MTc0ODE4OTcyNX0.iELm_BmQwNZqTywgWyT3rJw8yAlfNQcYuZi-A1a_p-c&t=2024-05-25T16%3A15%3A26.121Z',
          serviceId   : cookingId,
          fee: 34000,
      },
   {
          name : 'Cooking breakfast',
          serviceDetailCode: 'cooking-breakfast',
          description :'Cooking breakfast description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/english-breakfast.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9lbmdsaXNoLWJyZWFrZmFzdC5wbmciLCJpYXQiOjE3MTY2NTM4ODksImV4cCI6MTc0ODE4OTg4OX0.-UnJiBwEOPGebXNSOKJQS_kpyt6P_paw4u5g8Ga4mUE&t=2024-05-25T16%3A18%3A09.137Z',
          serviceId   : cookingId,
          fee: 40000,
      },
         {
          name : 'Cooking lunch',
          serviceDetailCode: 'cooking-lunch',
          description :'Cooking lunch description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/lunch-time.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9sdW5jaC10aW1lLnBuZyIsImlhdCI6MTcxNjY1MzkwMywiZXhwIjoxNzQ4MTg5OTAzfQ.SJ63tEtiie9Z8YMhiJrsRUU_Ed2VQpHd3qttwTJuGjQ&t=2024-05-25T16%3A18%3A23.759Z',
          serviceId   : cookingId,
          fee: 50000,
      },
         {
          name : 'Cooking dinner',
          serviceDetailCode: 'cooking-dinner',
          description :'Cooking dinner description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/dinner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9kaW5uZXIucG5nIiwiaWF0IjoxNzE2NjUzOTE0LCJleHAiOjE3NDgxODk5MTR9.seMqzHnkkMdkupqNqcPFRFuJyFNMQTwbW1A8fywCI3g&t=2024-05-25T16%3A18%3A34.915Z',
          serviceId   : cookingId,
          fee: 45000,
      },
      // Petting
     {
          name : 'Bathing pets',
          serviceDetailCode: 'bathing-pets',
          description :'Bathing pets description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/dinner.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9kaW5uZXIucG5nIiwiaWF0IjoxNzE2NjUzOTE0LCJleHAiOjE3NDgxODk5MTR9.seMqzHnkkMdkupqNqcPFRFuJyFNMQTwbW1A8fywCI3g&t=2024-05-25T16%3A18%3A34.915Z',
          serviceId   : pettingId,
          fee: 30000,
      },
 {
          name : 'Take for a walk',
          serviceDetailCode: 'walk-pets',
          description :'Take for a walk description',
          imageUri  : 'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/leaves.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9sZWF2ZXMucG5nIiwiaWF0IjoxNzE2NjU0MTc3LCJleHAiOjE3NDgxOTAxNzd9.eZmNKSbIyXA37C9-iPVfsIkDkQsRuyxBfZOkgeIrZeE&t=2024-05-25T16%3A22%3A57.091Z',
          serviceId   : pettingId,
          fee: 24000,
      },
       {
          name : 'Feed and play with pets',
          serviceDetailCode: 'feed-play-pets',
          description :'Feed and play with pets description',
          imageUri  :'https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service_details/feeding.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2VfZGV0YWlscy9mZWVkaW5nLnBuZyIsImlhdCI6MTcxNjY1NDE5MSwiZXhwIjoxNzQ4MTkwMTkxfQ.ufoEe0TgVkVPqHHdRzZRZLImjauHL0XpGwAgzRyeWLE&t=2024-05-25T16%3A23%3A11.691Z',
          serviceId   : pettingId,
          fee: 12000,
      },
    ]
  });
}

async function initServices() {
  await prisma.service.createMany({
    data: [
      {
        serviceCode: "cleaning",
        name: "Cleaning",
        description: "Cleaning description",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/cleaning.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvY2xlYW5pbmcucG5nIiwiaWF0IjoxNzE2NjQ1NTY2LCJleHAiOjE3NDgxODE1NjZ9._DYZ7IiXwpFstR0gS5esfEnw4Rv7xuYqA1xjdfTxxUA&t=2024-05-25T13%3A59%3A26.764Z",
      },
      {
        serviceCode: "gardener",
        name: "Gardener",
        description: "Gardener description",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/gardening.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvZ2FyZGVuaW5nLnBuZyIsImlhdCI6MTcxNjY0NTU5NywiZXhwIjoxNzQ4MTgxNTk3fQ.Qzt14O-h0qPpIzzLDDD3-EX5YlXLvmGPlDGOGBK3Tqo&t=2024-05-25T13%3A59%3A57.172Z",
      },
      {
        serviceCode: "painter",
        name: "Painter",
        description: "Painter description",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/painter.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvcGFpbnRlci5wbmciLCJpYXQiOjE3MTY2NDU2MTUsImV4cCI6MTc0ODE4MTYxNX0.dXDv_e74crrGsjtTuvMwsBsn2w7H8kNQlFJX0sMNT4w&t=2024-05-25T14%3A00%3A15.122Z",
      },
      {
        serviceCode: "plumber",
        name: "Plumber",
        description: "Plumber description",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/plumber.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvcGx1bWJlci5wbmciLCJpYXQiOjE3MTY2NDU2MzIsImV4cCI6MTc0ODE4MTYzMn0.chI6kAwqQKsmJNx4DgSBqGUZTbYMKYQBWBJL-M9GOFM&t=2024-05-25T14%3A00%3A32.779Z",
      },
      {
        serviceCode: "cooking",
        name: "Cooking",
        description: "Cooking description",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/cooking.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvY29va2luZy5wbmciLCJpYXQiOjE3MTY2NDU2NDYsImV4cCI6MTc0ODE4MTY0Nn0.tPI7nQ0H3Ynd960aqYMIHxbWHiKUGDSYefsiSO_sTTg&t=2024-05-25T14%3A00%3A46.514Z",
      },
      {
        serviceCode: "petting",
        name: "Petting",
        description: "Petting description",
        imageUri:
          "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/service/pets.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL3NlcnZpY2UvcGV0cy5wbmciLCJpYXQiOjE3MTY2NDU2NjAsImV4cCI6MTc0ODE4MTY2MH0.JAp9IOassyOCRqkR2YwRTQQV24K8rb9vXSGPtSx-AD0&t=2024-05-25T14%3A01%3A00.349Z",
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
