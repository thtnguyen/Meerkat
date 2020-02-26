package com.meerkat.api.models;


public class StreamStartMessage {
    private String streamId, messageType = "stream start";
    public StreamStartMessage(String streamId){
        this.streamId = streamId;
    }

    public String getStreamId() { return this.streamId; }
    public String getMessageType() { return this.messageType; }

    public void setStreamId(String streamId) { this.streamId = streamId; }
    public void setMessageType(String messageType) { this.messageType = messageType; }
}
