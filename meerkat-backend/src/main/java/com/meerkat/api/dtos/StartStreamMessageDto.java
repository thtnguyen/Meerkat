package com.meerkat.api.dtos;

public class StartStreamMessageDto {
    private String messageType, streamId, roomId;

    public StartStreamMessageDto(String messageType, String streamId, String roomId) {
        this.messageType = messageType;
        this.streamId = streamId;
        this.roomId = roomId;
    }

    public String getMessageType() { return this.messageType; }
    public String getStreamId() { return this.streamId; }
    public String getRoomId() { return this.roomId; }

    public void setMessageType(String messageType) { this.messageType = messageType; }
    public void setStreamId(String streamId) { this.streamId = streamId; }
    public void setRoomId(String roomId) { this.roomId = roomId; }
 }
