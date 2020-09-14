package sdk_java.sdk.util;


import java.io.BufferedReader;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONException;
import org.json.JSONObject;


public class Helper {
    protected static Helper instance;
    public static boolean isDebug = true;
    /**
     * Khoi tao the hien cua lop DatabaseHelp
     *
     *
     * @return
     *
     * @author: truonglt2
     * @return: DatabaseHelp
     * @throws:
     */
    public static Helper getInstance() {

        if (instance == null) {
            instance = new Helper();
        }
        return instance;
    }

    
    public static String toString(InputStream stream) {
        StringBuilder sb = new StringBuilder();
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(stream, StandardCharsets.UTF_8));

            String line = null;
            while ((line = br.readLine()) != null) {
                sb.append(line + "\n");
            }
            br.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return sb.toString();
    }

    public static ArrayList<NameValuePair> getObjectNameValuePairs(Object obj) throws IllegalArgumentException, IllegalAccessException {
        ArrayList<NameValuePair> list = new ArrayList<NameValuePair>();
        for (Field field : obj.getClass().getDeclaredFields()) {
            field.setAccessible(true); // if you want to modify private fields
            list.add(new BasicNameValuePair(field.getName(), (String) field.get(obj)));
        }
        return list;
    }
}
