import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  const response = [
    {
      id: 1,
      title: '바쁜 아침을 위한 옷장 정리 꿀팁',
      image_url:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170808715421480137.jpg?w=1700&h=1020&c=c',
      nickname: '집안일요정',
      bookmark_counts: 11,
    },
    {
      id: 2,
      title: '바쁜 아침을 위한 옷장 정리 꿀팁',
      image_url:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170808715421480137.jpg?w=1700&h=1020&c=c',
      nickname: '집안일요정',
      bookmark_counts: 11,
    },
    {
      id: 3,
      title: '바쁜 아침을 위한 옷장 정리 꿀팁',
      image_url:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170808715421480137.jpg?w=1700&h=1020&c=c',
      nickname: '집안일요정',
      bookmark_counts: 11,
    },
    {
      id: 4,
      title: '바쁜 아침을 위한 옷장 정리 꿀팁',
      image_url:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170808715421480137.jpg?w=1700&h=1020&c=c',
      nickname: '집안일요정',
      bookmark_counts: 11,
    },
    {
      id: 5,
      title: '바쁜 아침을 위한 옷장 정리 꿀팁',
      image_url:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170808715421480137.jpg?w=1700&h=1020&c=c',
      nickname: '집안일요정',
      bookmark_counts: 11,
    },
    {
      id: 6,
      title: '바쁜 아침을 위한 옷장 정리 꿀팁',
      image_url:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170808715421480137.jpg?w=1700&h=1020&c=c',
      nickname: '집안일요정',
      bookmark_counts: 11,
    },
    {
      id: 7,
      title: '바쁜 아침을 위한 옷장 정리 꿀팁',
      image_url:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170808715421480137.jpg?w=1700&h=1020&c=c',
      nickname: '집안일요정',
      bookmark_counts: 11,
    },
    {
      id: 8,
      title: '바쁜 아침을 위한 옷장 정리 꿀팁',
      image_url:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170808715421480137.jpg?w=1700&h=1020&c=c',
      nickname: '집안일요정',
      bookmark_counts: 11,
    },
    {
      id: 9,
      title: '바쁜 아침을 위한 옷장 정리 꿀팁',
      image_url:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170808715421480137.jpg?w=1700&h=1020&c=c',
      nickname: '집안일요정',
      bookmark_counts: 11,
    },
  ];
  return NextResponse.json({ response });
}
