import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomz = [19, 20, 34];
  return roomz.map((size) => new ClassRoom(size));
}
