import type { ScheduleResponse } from "../models/data";

export class Schedules implements ScheduleResponse {
  public messages: {
    level: string;
    text: string;
  }[];
  public plannings: {
    id: string;
    label: string;
    type: string;
    messages: {
      level: string;
      text: string;
    }[];
    events: {
      id: string;
      startDateTime: string;
      endDateTime: string;
      course: {
        id: string;
        label: string;
        color: string;
        type: string;
        online: boolean;
        url: string;
      };
      rooms: {
        id: string;
        label: string;
        type: string;
        building: string;
      }[];
      teachers: {
        id: string;
        displayname: string;
        email: string;
      }[];
      groups: {
        id: string;
        label: string;
      }[];
    }[];
    default: boolean;
  }[];
  
  constructor(data: ScheduleResponse) {
    this.messages = data.messages.map((message) => ({
      level: message.level,
      text: message.text,
    }));
    this.plannings = data.plannings.map((planning) => ({
      id: planning.id,
      label: planning.label,
      type: planning.type,
      messages: planning.messages.map((message) => ({
        level: message.level,
        text: message.text,
      })),
      events: planning.events.map((event) => ({
        id: event.id,
        startDateTime: event.startDateTime,
        endDateTime: event.endDateTime,
        course: {
          id: event.course.id,
          label: event.course.label,
          color: event.course.color,
          type: event.course.type,
          online: event.course.online,
          url: event.course.url,
        },
        rooms: event.rooms.map((room) => ({
          id: room.id,
          label: room.label,
          type: room.type,
          building: room.building,
        })),
        teachers: event.teachers.map((teacher) => ({
          id: teacher.id,
          displayname: teacher.displayname,
          email: teacher.email,
        })),
        groups: event.groups.map((group) => ({
          id: group.id,
          label: group.label,
        })),
      })),
      default: planning.default,
    }));
  }
}
